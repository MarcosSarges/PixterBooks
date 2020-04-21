import BackgroundService from 'react-native-background-actions';
import Geo from 'react-native-geolocation-service';
import {isPointWithinRadius} from 'geolib';
import colors from '@assets/styles/colors';
import PushNotification from 'react-native-push-notification';
import {Platform, PermissionsAndroid, Alert} from 'react-native';

const backgroundServiceOptions = {
  taskName: 'Pixter Books',
  taskTitle: 'Pixter Books está executando',
  taskDesc: 'Estamos buscando a loja mais proxima de você',
  taskIcon: {
    name: 'ic_launcher',
    type: 'mipmap',
  },
  color: colors.primary,
  parameters: {
    delay: 5000,
  },
};

async function sleep(msec: number) {
  return new Promise((resolve) => setTimeout(resolve, msec));
}

const sendNotifications = async ({delay}: any) => {
  await new Promise(async () => {
    let livrarias = [
      {
        id: '1',
        visibility: false,
        name: 'Livraria Cultura',
        coords: {
          latitude: -23.558713,
          longitude: -46.6601945,
        },
      },
      {
        id: '2',
        visibility: false,
        name: 'Livraria Saraiva',
        coords: {
          latitude: -23.5704935,
          longitude: -46.6435333,
        },
      },
      {
        id: '3',
        visibility: false,
        name: 'Minha casa',
        coords: {latitude: -1.275835, longitude: -47.908896},
      },
    ];
    while (BackgroundService.isRunning()) {
      await sleep(delay);
      await Geo.getCurrentPosition(
        (current) => {
          livrarias = livrarias.map((livraria) => {
            let inRaio = isPointWithinRadius(
              {
                latitude: current.coords.latitude,
                longitude: current.coords.longitude,
              },
              livraria.coords,
              400,
            );
            if (inRaio && !livraria.visibility) {
              PushNotification.localNotification({
                id: livraria.id,
                userInfo: {id: livraria.id},
                title: 'Encontramos uma livraria!!!',
                largeIcon: 'none',
                color: colors.primary,
                message: `Compre seus livros favoritos agora, ${livraria.name} está próximo daqui`,
              });
              livraria = {...livraria, visibility: true};
            } else if (inRaio === false && livraria.visibility) {
              PushNotification.cancelAllLocalNotifications();
              livraria = {...livraria, visibility: false};
            }

            return livraria;
          });
        },
        (err) => console.log(err),
        {enableHighAccuracy: true, distanceFilter: 100},
      );
    }
  });
};

const handleSendNotifications = async () => {
  await BackgroundService.start(sendNotifications, backgroundServiceOptions);
};

const requestLocationPermission = async () => {
  if (Platform.OS === 'android') {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        handleSendNotifications();
      } else {
        Alert.alert(
          'Ops',
          'Nós precisamos da usa localização para encontrar a livraria mais próxima.',
        );
      }
    } catch (err) {
      Alert.alert(
        'Ops',
        'Nós precisamos da usa localização para encontrar a livraria mais próxima.',
      );
    }
  } else {
    Geo.requestAuthorization();
    handleSendNotifications();
  }
};
export default () => requestLocationPermission();
