import React from "react";
import Box from "@src/components/Box/Box";
import Text from "@src/components/Text/Text";
import Image from "@src/components/Image/Image";
import Button from "@src/components/Button/Button";
import { useTheme } from "@src/theme/ThemeProvider";
import Link from "@src/components/Link/Link";
import Icon from "@src/components/Icon/Icon";

interface FeedProps {
  children: React.ReactNode;
}

export default function Feed({ children }) {
  const theme = useTheme();
  return (
    <Box
      styleSheet={{
        backgroundColor: theme.colors.neutral.x000,
        marginTop: "-228px",
        width: "100%",
        maxWidth: "683px",
        borderRadius: "8px",
        paddingVertical: "40px",
        paddingHorizontal: "32px",
      }}
    >
      {children}
    </Box>
  );
}

Feed.Header = () => {
  const theme = useTheme();
  return (
    <Box
      styleSheet={{
        borderBottom: `1px solid ${theme.colors.neutral.x200}`,
        paddingBottom: "24px",
        marginBottom: `24px`,
      }}
    >
      <Box
        styleSheet={{
          flexDirection: "row",
          justifyContent: "space-between",
          gap: "16px",
          marginBottom: "16px",
        }}
      >
        <Image
          styleSheet={{
            width: { xs: "100px", md: "128px" },
            height: { xs: "100px", md: "128px" },
            borderRadius: "100%",
          }}
          src="http://github.com/omariosouto.png"
          alt="imagem perfil"
        />
        <Box
          styleSheet={{
            justifyContent: "space-between",
          }}
        >
          <Box
            styleSheet={{
              flex: 1,
              justifyContent: "space-between",
              display: { xs: "none", md: "flex" },
            }}
          >
            <Button fullWidth colorVariant="primary" size="xl" href="/">
              NewsLetter
            </Button>
            <Button fullWidth colorVariant="neutral" size="xl" href="/">
              Buy me a coffe
            </Button>
          </Box>

          <Box
            styleSheet={{
              flex: 1,
              justifyContent: "space-between",
              display: { xs: "flex", md: "none" },
            }}
          >
            <Button fullWidth colorVariant="primary" size="xs" href="/">
              NewsLetter
            </Button>
            <Button fullWidth colorVariant="neutral" size="xs" href="/">
              Buy me a coffe
            </Button>
          </Box>
        </Box>
      </Box>
      <Text tag="h1" variant="heading4">
        Mario Souto
      </Text>
      <Text tag="h4" variant="body3">
        @omariosouto - DevSoutinho - Brasil
      </Text>
      <Text tag="h4" variant="body3">
        Sr Lead Software Engineer, Nubank
      </Text>
      <Box styleSheet={{
         display: "flex",
         flexDirection: 'row',
         justifyContent:"left",
         gap:5 ,
         paddingTop:'5px'
      }}>
        <Icon name="youtube" />
        <Icon name="twitter" />
        <Icon name="instagram" />
        <Icon name="github" />
      </Box>

    </Box>
  );
};

Feed.Posts = () => {
  return (
    <Box>
      <Text>Feed Posts</Text>
    </Box>
  );
};
