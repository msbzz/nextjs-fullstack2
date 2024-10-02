import Box from "@src/components/Box/Box";
import BackGround from "./patterns/BackGround/BackGround";
import Menu from "./patterns/Menu/Menu";
import Feed from "./patterns/Feed/Feed";
import Footer from "./patterns/Footer/Footer";
import { useTheme } from "@src/theme/ThemeProvider";
import templatePageHOC from "@src/services/template/templatePageHOC";
import type { Post } from "@src/services/posts/PostsService";

interface HomeScreenProps {
  posts: Post[];
}

function HomeScreen(props: HomeScreenProps) {
  const theme = useTheme();
  return (
    <Box
      tag="main"
      styleSheet={{
        flex: 1,
        backgroundColor: theme.colors.neutral.x000,
        alignItems: "center",
      }}
    >
      <BackGround />
      <Menu />
      <Feed>
        <Feed.Header />
        <Feed.Posts posts={props.posts} />
      </Feed>
      <Footer />
    </Box>
  );
}

export default templatePageHOC(HomeScreen, { title: "Home" });
