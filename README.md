### Our React Native Pro Challenge

You can start the RN-Geolocation [Challenge](https://bitbucket.org/pixtertecnologia/challenge-rn-geolocation) right now! Just clone the repo and build a List/Detail app with ReactNative and [Redux](https://redux.js.org/) and Geolocation.

### API

You can fetch data from google books API, ex:
`https://www.googleapis.com/books/v1/volumes?q=SEARCH_TERM`

### Design

The design is available [Here](https://www.figma.com/file/W6ekGiWzTL9NYpOZMybApP8i/books-app-pixter)

#### 1. List

On the **List** screen the user should be able to:

1. See a list of items.
2. Pull to refresh the list(refetch).
3. Scroll down and load more books.
4. Search(filter) for books
5. Press one of the items and navigate the user to the Detail screen.

#### 2. Detail

On the **Detail** screen the user should be able to:

1. See more information about the selected book.
2. Be able to Like, Rate and a Buy a book(no need for API calls, just Frontend).

### Geo-Fence Specs

Your challenge is to show a notification based on a geo-fence related to a bookstore location.

Bookstore addresses:

- **name:** Livraria Cultura, **address:** Av. Paulista, 2073
- **name:** Livraria Saraiva, **address:** R. Maestro Cardim, 1947

Fence Radius: 400 meters

### Geo-Fence Espected Behavior

1. When the cellphone enters the geo-fence, the app needs to show a notification _"Buy your favorite books now, {bookstore_name} is near here"_
2. When the cellphone leaves the area, the notification needs to dissapear.
