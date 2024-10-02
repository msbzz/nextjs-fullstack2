
import Box from "@src/components/Box/Box";
import BackGround from "./patterns/BackGround/BackGround";
import Menu from "./patterns/Menu/Menu";
import Feed from "./patterns/Feed/Feed";
import Footer from "./patterns/Footer/Footer";
import { useTheme } from "@src/theme/ThemeProvider" ;
import templatePageHOC from "@src/services/template/templatePageHOC";



function HomeScreen(props){
  //console.log('em homeScreen ==>> ',props)
  const theme = useTheme();
  return(
  <Box
  tag='main'
  styleSheet={{
    flex:1,
    backgroundColor:theme.colors.neutral.x000,
    alignItems:'center',
   }}
  >

   <BackGround/>
   <Menu/>
   <Feed>
   <Feed.Header/>
   </Feed>
   <Footer/>
   </Box>
 )
}

export default templatePageHOC(HomeScreen,{title:"Home"});
