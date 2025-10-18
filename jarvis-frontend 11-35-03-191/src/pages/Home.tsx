import {
  Container,
  Typography,
  Card,
  CardContent,
  Avatar,
  Box,
  Link,
  Divider,
  useMediaQuery,
} from '@mui/material';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from '@mui/lab';
import { useTheme } from '@mui/material/styles';

function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0d1117, #1e3a8a)',
        py: { xs: 3, sm: 6 },
        px: { xs: 2, sm: 0 },
      }}
    >
      <Container maxWidth="md">
        {/* Profile Card */}
        <Card
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: 'center',
            p: { xs: 3, sm: 4 },
            background: 'rgba(255,255,255,0.05)',
            backdropFilter: 'blur(20px)',
            borderRadius: 3,
            boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
            mb: 6,
            transition: 'transform 0.3s, box-shadow 0.3s',
            '&:hover': {
              transform: { sm: 'translateY(-10px)', xs: 'none' },
              boxShadow: '0 16px 48px rgba(0,0,0,0.6)',
            },
          }}
        >
          <Avatar
            alt="Aditya Biswal"
            src="assets/aditya.jpg"
            sx={{
              width: { xs: 100, sm: 140 },
              height: { xs: 100, sm: 140 },
              mb: { xs: 2, sm: 0 },
              mr: { sm: 4, xs: 0 },
              border: '4px solid transparent',
              background: 'linear-gradient(135deg, #10b1d5ff, #1976d2)',
              padding: '2px',
              borderRadius: '50%',
              flexShrink: 0,
            }}
          />
          <CardContent
            sx={{
              flex: 1,
              textAlign: { xs: 'center', sm: 'left' },
            }}
          >
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                fontWeight: 'bold',
                letterSpacing: 1,
                fontSize: { xs: '1.6rem', sm: '2rem' },
                background: 'linear-gradient(90deg, #39cb54ff, #052e57ff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Aditya Ganga Biswal
            </Typography>

            <Typography
              variant="h6"
              gutterBottom
              sx={{
                mb: 3,
                fontWeight: 'bold',
                fontSize: { xs: '1rem', sm: '1.2rem' },
                background: 'linear-gradient(90deg, #ff4081, #1976d2)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Software Engineer | Full-Stack Developer | Cloud Enthusiast
            </Typography>

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 1.5,
                alignItems: { xs: 'center', sm: 'flex-start' },
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  fontSize: { xs: '0.95rem', sm: '1.05rem' },
                  fontWeight: 500,
                  wordBreak: 'break-word',
                }}
              >
                📧
                <Link
                  href="mailto:adityabiswal98@gmail.com"
                  color="inherit"
                  sx={{
                    ml: 1,
                    fontWeight: 600,
                    fontSize: { xs: '0.95rem', sm: '1.05rem' },
                    background: 'linear-gradient(90deg, #eeeeeeff, #1976d2)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    textDecoration: 'none',
                    '&:hover': { opacity: 0.8 },
                  }}
                >
                  adityabiswal98@gmail.com
                </Link>
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  fontSize: { xs: '0.95rem', sm: '1.05rem' },
                  fontWeight: 500,
                  background: 'linear-gradient(90deg, #eeeeeeff, #1976d2)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                📱 +91 7038131072
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  fontSize: { xs: '0.95rem', sm: '1.05rem' },
                  fontWeight: 500,
                }}
              >
                🔗
                <Link
                  href="https://linkedin.com/in/aditya-biswal-320375191"
                  target="_blank"
                  sx={{
                    ml: 1,
                    fontWeight: 600,
                    fontSize: { xs: '0.95rem', sm: '1.05rem' },
                    background: 'linear-gradient(90deg, #eeeeeeff, #1976d2)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    textDecoration: 'none',
                    '&:hover': { opacity: 0.8 },
                  }}
                >
                  linkedin.com/in/aditya-biswal-320375191
                </Link>
              </Typography>
            </Box>
          </CardContent>
        </Card>

        {/* About Me Section */}
        <Card
          sx={{
            p: { xs: 2, sm: 3 },
            mb: 6,
            background: 'rgba(255,255,255,0.05)',
            backdropFilter: 'blur(15px)',
          }}
        >
          <Typography variant="h5" gutterBottom>
            About Me
          </Typography>
          <Divider sx={{ mb: 2, background: 'rgba(255,255,255,0.2)' }} />
          <Typography variant="body1" paragraph sx={{ fontSize: { xs: '0.95rem', sm: '1rem' } }}>
            I am a passionate <b>Software Engineer</b> with experience in building scalable full-stack applications, CRM platforms, and cloud-based solutions.
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontSize: { xs: '0.95rem', sm: '1rem' } }}>
            My expertise spans across technologies like <b>React.js, Node.js, NestJS, Meteor.js, MongoDB, PostgreSQL, AWS, and Docker</b>. I’ve also built Chrome extensions and Outlook Add-ins that integrate seamlessly with CRMs to improve workflow efficiency.
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontSize: { xs: '0.95rem', sm: '1rem' } }}>
            Over the years, I have contributed to projects in healthcare IT, M&A platforms, and CRM integrations — delivering innovative solutions that improved performance, scalability, and usability.
          </Typography>
        </Card>

        {/* Journey Timeline */}
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            mb: 3,
            fontWeight: 'bold',
            textAlign: 'center',
            fontSize: { xs: '1.6rem', sm: '2.2rem' },
            background: 'linear-gradient(90deg, #ff4081, #1976d2)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          My Journey 🚀
        </Typography>

        <Timeline position={isMobile ? 'right' : 'alternate'}>
          {/* Mergerware */}
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="primary" />
              {!isMobile && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent>
              <Card sx={{ p: 2, mb: 3 }}>
                <Typography variant="h6" textAlign="center">
                  Software Engineer
                </Typography>
                <Typography variant="subtitle2" textAlign="center">
                  Mergerware Private Limited | May 2025 – Present
                </Typography>
              </Card>
            </TimelineContent>
          </TimelineItem>

          {/* IHX */}
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="secondary" />
            </TimelineSeparator>
            <TimelineContent>
              <Card sx={{ p: 2, mb: 3 }}>
                <Typography variant="h6" textAlign="center">
                  Software Engineer
                </Typography>
                <Typography variant="subtitle2" textAlign="center">
                  IHX Private Limited | Jan 2023 – Present
                </Typography>
              </Card>
            </TimelineContent>
          </TimelineItem>
        </Timeline>

        {/* Education Section */}
        <Card
          sx={{
            p: { xs: 2, sm: 3 },
            mb: 6,
            background: 'rgba(255,255,255,0.05)',
            backdropFilter: 'blur(15px)',
          }}
        >
          <Typography
            variant="h5"
            gutterBottom
            sx={{
              mb: 2,
              fontWeight: 'bold',
              textAlign: 'center',
              fontSize: { xs: '1.4rem', sm: '1.8rem' },
              background: 'linear-gradient(90deg, #ff4081, #1976d2)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Education 🎓
          </Typography>
          <Divider sx={{ mb: 2, background: 'rgba(255,255,255,0.2)' }} />

          <Timeline position={isMobile ? 'right' : 'alternate'}>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot color="primary" />
                {!isMobile && <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent>
                <Card sx={{ p: 2, mb: 3 }}>
                  <Typography variant="h6">Master of Computer Applications (MCA)</Typography>
                  <Typography variant="subtitle2" color="text.secondary">
                    Christ Deemed to be University | 2021 – 2023
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    • Major: Computer Science & Engineering • Data Structures, Cloud Computing, Web Development, AI
                  </Typography>
                </Card>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot color="secondary" />
              </TimelineSeparator>
              <TimelineContent>
                <Card sx={{ p: 2, mb: 3 }}>
                  <Typography variant="h6">Bachelor of Computer Applications</Typography>
                  <Typography variant="subtitle2" color="text.secondary">
                    Dr. Ambedkar College | 2018 – 2021
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    • Major: Computer Science • Focus: Data Structures, Web Development
                  </Typography>
                </Card>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </Card>
      </Container>
    </Box>
  );
}

export default Home;