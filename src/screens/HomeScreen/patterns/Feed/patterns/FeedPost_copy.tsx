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
  const theme = useTheme();
  const postDate = new Date(date)
    .toLocaleDateString('pt-BR', { year: 'numeric', month: 'short', day: 'numeric' })
    .replace('.', '')
    .replace(/de /g, '');

  return (
    <Box
      styleSheet={{
        position: 'relative',
        paddingBottom: '35px',
      }}
    >
      <Box
        styleSheet={{
          position: 'absolute',
          top: 0, bottom: 0,
          color: theme.colors.neutral.x200,
          marginLeft: '-16px',
        }}
      >
        <Icon
          size="sm"
          name="github"
          styleSheet={{
            transform: {
              xs: 'translateX(-50%) scale(.9)',
              sm: 'translateX(-50%)',
            },
            position: 'absolute',
            top: '0',
            left: '0',
          }}
        />
        <Box
          styleSheet={{
            top: "16px",
            bottom: "0",
            margin: "auto",
            position: "absolute",
            width: '1px',
            backgroundColor: 'currentColor',
          }}
        />
      </Box>
      <Text
        variant="body4"
        styleSheet={{ fontWeight: 'bold', marginBottom: '32px', marginLeft: '4px' }}
      >
        {postDate}
      </Text>
      {/* Title, Excerpt */}
      <Link
        href={url}
        variant="body1"
        styleSheet={{
          marginBottom: '8px',
          display: 'inline',
        }}
        colorVariantEnabled={false}
      >
        <Box
          tag="span"
          styleSheet={{
            display: 'inline',
            padding: '2px',
            borderRadius: "4px",
            color: theme.colors.neutral.x800,
            backgroundColor: theme.colors.neutral.x200,
            hover: {
              color: theme.colors.primary.x900,
              backgroundColor: theme.colors.primary.x200,
            }
          }}
        >
          {title}
        </Box>
      </Link>
      <Text
        variant="body3"
        styleSheet={{
          marginBottom: '20px'
        }}
      >
        {excerpt}
      </Text>
      {/* Tags */}
      <Box styleSheet={{
        flexDirection: 'row',
        gap: '4px',
      }}>
        {tags?.map((tag) => (
          <Link
            key={tag}
            href={`/tags/${tag}`}
            variant="body4"
            styleSheet={{
              color: theme.colors.neutral.x800,
              backgroundColor: theme.colors.neutral.x100,
              borderRadius: "1000px",
              padding: '6px 8px',
              hover: {
                color: theme.colors.primary.x900,
                backgroundColor: theme.colors.primary.x200,
              }
            }}
            colorVariantEnabled={false}
          >
            #{tag}
          </Link>
        ))}
      </Box>
    </Box>
  )
}
