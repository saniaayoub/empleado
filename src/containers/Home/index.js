import React, {Component} from 'react';
import {View, Text, FlatList} from 'react-native';
import {connect} from 'react-redux';
import {Button, Header} from '../../components';
import {AppAction} from '../../store/actions';
import styles from './styles';

const RenderItem = ({item}) => {
  return (
    <View style={styles.itemView}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.bodyText}>{item.body}</Text>
    </View>
  );
};

class Home extends Component {
  unSubNavigationEvent = () => {};

  componentDidMount() {
    this.props.GetPosts();
    this.unSubNavigationEvent = this.props.navigation.addListener(
      'focus',
      () => {
        this.flatListRef?.scrollToOffset({animated: true, offset: 0});
      },
    );
  }

  componentWillUnmount() {
    this.unSubNavigationEvent();
  }

  render() {
    return (
      <View style={styles.container}>
        <Header.Standard
          rightIconName={'log-out'}
          Heading={'Home'}
          onPressRight={this.props.Logout}
        />
        <FlatList
          data={this.props.posts}
          ref={ref => (this.flatListRef = ref)}
          keyExtractor={(item, index) =>
            item?.id?.toString() || index.toString()
          }
          renderItem={RenderItem}
          contentContainerStyle={styles.listContentContainerStyle}
        />
        <Button.FloatingButton
          onPress={() => {
            this.props.navigation.navigate('AddPost');
          }}
        />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.AppReducer.posts,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    AddPost: payload => {
      dispatch(AppAction.AddPost(payload));
    },
    GetPosts: () => {
      dispatch(AppAction.GetPosts());
    },
    Logout: () => {
      dispatch(AppAction.Logout());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
