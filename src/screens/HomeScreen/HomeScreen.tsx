
import Box from "@src/components/Box/Box";
import Text from "@src/components/Text/Text";
import BackGround from "./patterns/BackGround/BackGround";
import Menu from "./patterns/Menu/Menu";
import Feed from "./patterns/Feed/Feed";
import Footer from "./patterns/Footer/Footer";
import { useTheme } from "@src/theme/ThemeProvider" ;
import Link from "../../components/Link/Link";

export default function HomeScreen(){
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
