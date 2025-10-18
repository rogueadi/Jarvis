import { AppBar, Toolbar, Typography, Button, Box, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <AppBar
      position="sticky"
      sx={{
        backdropFilter: "blur(10px)",
        backgroundColor: "rgba(22, 27, 34, 0.9)",
        py: isMobile ? 1 : 0,
      }}
    >
      <Toolbar
        sx={{
          flexDirection: isMobile ? "column" : "row",
          alignItems: isMobile ? "center" : "center",
          justifyContent: isMobile ? "center" : "space-between",
          textAlign: "center",
        }}
      >
        {/* Title */}
        <Typography
          variant="h6"
          sx={{
            flexGrow: isMobile ? 0 : 1,
            fontWeight: "bold",
            mb: isMobile ? 1 : 0,
          }}
        >
          {/* Aditya Biswal */}
        </Typography>

        {/* Buttons Container */}
        <Box
          sx={{
            display: "flex",
            flexWrap: isMobile ? "wrap" : "nowrap",
            justifyContent: "center",
            gap: 1,
          }}
        >
          <Button color="inherit" component={Link} to="/" sx={{ minWidth: 80 }}>
            Home
          </Button>
          <Button color="inherit" component={Link} to="/resume" sx={{ minWidth: 80 }}>
            Resume
          </Button>
          <Button color="inherit" component={Link} to="/experience" sx={{ minWidth: 80 }}>
            Experience
          </Button>
          <Button color="inherit" component={Link} to="/blogs" sx={{ minWidth: 80 }}>
            Blogs
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;