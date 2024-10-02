import Box from "@src/components/Box/Box";
import Button from "@src/components/Button/Button";
import Icon from "@src/components/Icon/Icon";
import Image from "@src/components/Image/Image";
import Link from "@src/components/Link/Link";
import Text from "@src/components/Text/Text";
import { useTheme } from "@src/theme/ThemeProvider";

interface FeedPostProps {
  title: string;
  excerpt: string;
  url: string;
  date: string;
  tags: string[];
}

export function FeedPost({ title, excerpt, date, tags, url }: FeedPostProps) {
  return(
    <Box styleSheet={{
      position :'relative',
      paddingBotton:'35px',
    }}>
      {title}
    </Box>
   )





}
