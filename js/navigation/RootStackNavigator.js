import { createStackNavigator, createAppContainer } from 'react-navigation';
import NavigationLayout from './NavigationLayout';
import SpeakerModal from '../screens/Speaker';

export default createAppContainer(
  createStackNavigator(
    {
      Layout: NavigationLayout,
      Speaker: SpeakerModal
    },
    {
      mode: 'modal',
      headerMode: 'none'
    }
  )
);

// import About from '../screens/About';
// const AppNavigator = createStackNavigator({
//   About: {
//     screen: About
//   }
// });
// export default createAppContainer(AppNavigator);
