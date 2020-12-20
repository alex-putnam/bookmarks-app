import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import AddBookmark from './AddBookmark/AddBookmark';
import EditBookmark from './EditBookmark/EditBookmark';
import BookmarkList from './BookmarkList/BookmarkList';
import BookmarksContext from './BookmarksContext';
import Nav from './Nav/Nav';
import config from './config';
import './App.css';

class App extends Component {
  state = {
<<<<<<< HEAD
    bookmarks: [],
    error: null,
  };

  setBookmarks = bookmarks => {
    this.setState({
      bookmarks,
      error: null,
    })
  }
=======
    bookmarks,
    error: null,
  };

  setBookmarks = (bookmarks) => {
    this.setState({
      bookmarks,
      error: null,
    });
  };
>>>>>>> master

  addBookmark = (bookmark) => {
    this.setState({
      bookmarks: [...this.state.bookmarks, bookmark],
    });
  };

  deleteBookmark = bookmarkId => {
    const newBookmarks = this.state.bookmarks.filter(bm =>
      bm.id !== bookmarkId
    )
    this.setState({
      bookmarks: newBookmarks
    })
  }

  componentDidMount() {
    fetch(config.API_ENDPOINT, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${config.API_KEY}`,
      },
    })
      .then((res) => {
        if (!res.ok) {
<<<<<<< HEAD
          return res.json().then(error => Promise.reject(error))
=======
          throw new Error(res.status);
>>>>>>> master
        }
        return res.json();
      })
      .then(this.setBookmarks)
<<<<<<< HEAD
      .catch(error => {
        console.error(error)
        this.setState({ error })
      })
  }

  updateBookmark = updatedBookmark => {
    this.setState({
      bookmarks: this.state.bookmarks.map(bm =>
        (bm.id !== updatedBookmark.id) ? bm : updatedBookmark
      )
    })
  }

  render() {
    const contextValue = {
      bookmarks: this.state.bookmarks,
      addBookmark: this.addBookmark,
      deleteBookmark: this.deleteBookmark,
      updateBookmark: this.updateBookmark,
    }
    return (
      <main className='App'>
        <h1>Bookmarks!</h1>
        <BookmarksContext.Provider value={contextValue}>
          <Nav />
          <div className='content' aria-live='polite'>
            <Route
              exact
              path='/'
              component={BookmarkList}
            />
            <Route
              path='/add-bookmark'
              component={AddBookmark}
            />
            <Route
              path='/edit/:bookmarkId'
              component={EditBookmark}
            />
          </div>
        </BookmarksContext.Provider>
=======
      .catch((error) => this.setState({ error }));
  }

  render() {
    const { bookmarks } = this.state;
    return (
      <main className='App'>
        <h1>Bookmarks!</h1>
        <Nav />
        <div className='content' aria-live='polite'>
          <Route
            path='/add-bookmark'
            render={({ history }) => {
              console.log(history);
              return (
                <AddBookmark
                  onAddBookmark={this.addBookmark}
                  onClickCancel={() => history.push('/')}
                />
              );
            }}
          />
          <Route
            exact
            path='/'
            render={() => <BookmarkList bookmarks={bookmarks} />}
          />
        </div>
>>>>>>> master
      </main>
    );
  }
}

export default App;
