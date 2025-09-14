import {
  Container,
  Typography,
  Card,
  CardContent,
  Avatar,
  Box,
  Link,
  Divider,
} from '@mui/material';

import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from '@mui/lab';

function Home() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0d1117, #1e3a8a)',
        py: 6,
      }}
    >
      <Container maxWidth="md">
        {/* Profile Card */}
        <Card
          sx={{
            display: 'flex',
            alignItems: 'center',
            p: 4,
            background: 'rgba(255,255,255,0.05)',
            backdropFilter: 'blur(20px)',
            borderRadius: 3,
            boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
            mb: 6,
            transition: 'transform 0.3s, box-shadow 0.3s',
            '&:hover': {
              transform: 'translateY(-10px)',
              boxShadow: '0 16px 48px rgba(0,0,0,0.6)',
            },
          }}
        >
          <Avatar
            alt="Aditya Biswal"
            src="/profile.jpg"
            sx={{
              width: 140,
              height: 140,
              mr: 4,
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
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                fontWeight: 'bold',
                letterSpacing: 1,
                background: 'linear-gradient(90deg, #39cb54ff, #052e57ff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textDecoration: 'none',
              }}
            >
              Aditya Ganga Biswal
            </Typography>

            <Typography
              variant="h5"
              gutterBottom
              sx={{
                mb: 3,
                fontWeight: 'bold',
                textAlign: 'left',
                background: 'linear-gradient(90deg, #ff4081, #1976d2)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                letterSpacing: 1.5,
              }}
            >
              Software Engineer | Full-Stack Developer | Cloud Enthusiast
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              <Typography
                variant="body1"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  fontSize: '1.05rem',
                  fontWeight: 500,
                }}
              >
                📧
                <Link
                  href="mailto:adityabiswal98@gmail.com"
                  color="inherit"
                  sx={{
                    ml: 1,
                    fontWeight: 600,
                    fontSize: '1.05rem',
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
                  fontSize: '1.05rem',
                  fontWeight: 500,
                  background: 'linear-gradient(90deg, #eeeeeeff, #1976d2)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textDecoration: 'none',
                }}
              >
                📱 +91 7038131072
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  fontSize: '1.05rem',
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
                    fontSize: '1.05rem',
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
            p: 3,
            mb: 6,
            background: 'rgba(255,255,255,0.05)',
            backdropFilter: 'blur(15px)',
          }}
        >
          <Typography variant="h5" gutterBottom>
            About Me
          </Typography>
          <Divider sx={{ mb: 2, background: 'rgba(255,255,255,0.2)' }} />
          <Typography variant="body1" paragraph>
            I am a passionate <b>Software Engineer</b> with experience in
            building scalable full-stack applications, CRM platforms, and
            cloud-based solutions. I love solving complex problems and creating
            user-friendly applications that make a real impact.
          </Typography>
          <Typography variant="body1" paragraph>
            My expertise spans across technologies like{' '}
            <b>
              React.js, Node.js, NestJS, Meteor.js, MongoDB, PostgreSQL, AWS,
              and Docker
            </b>
            . I’ve also built Chrome extensions and Outlook Add-ins that
            integrate seamlessly with CRMs to improve workflow efficiency.
          </Typography>
          <Typography variant="body1" paragraph>
            Over the years, I have contributed to projects in healthcare IT, M&A
            platforms, and CRM integrations — delivering innovative solutions
            that improved performance, scalability, and usability.
          </Typography>
        </Card>

        {/* Journey Timeline */}
        {/* Journey Timeline */}
        <Typography
          variant="h3" // bigger than h5
          gutterBottom
          sx={{
            mb: 3,
            fontWeight: 'bold',
            textAlign: 'center',
            background: 'linear-gradient(90deg, #ff4081, #1976d2)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            letterSpacing: 1.5,
          }}
        >
          My Journey 🚀
        </Typography>
        <Timeline position="alternate">
          {/* Mergerware */}
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="primary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Card sx={{ p: 2, mb: 3 }}>
                <Typography
                  variant="h6"
                  sx={{
                    mb: 3,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    background: 'linear-gradient(90deg, #50bb4eff, #1976d2)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    letterSpacing: 1.5,
                  }}
                >
                  Software Engineer
                </Typography>
                <Typography
                  variant="subtitle2"
                  color="text.secondary"
                  sx={{
                    mb: 3,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    background: 'linear-gradient(90deg, #50bb4eff, #1976d2)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    letterSpacing: 1.5,
                  }}
                >
                  Mergerware Private Limited | May 2025 – Present
                </Typography>
                {/* <Typography variant="body2" sx={{ mt: 1 }}>
                  • Engineered full-stack, multi-tenant CRM • Built Gmail &
                  Outlook email logging extensions • Designed CI/CD pipeline on
                  AWS with Docker
                </Typography> */}
              </Card>
            </TimelineContent>
          </TimelineItem>

          {/* IHX */}
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="secondary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Card sx={{ p: 2, mb: 3 }}>
                <Typography
                  variant="h6"
                  sx={{
                    mb: 3,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    background: 'linear-gradient(90deg, #50bb4eff, #1976d2)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    letterSpacing: 1.5,
                  }}
                >
                  Software Engineer
                </Typography>
                <Typography
                  variant="subtitle2"
                  color="text.secondary"
                  sx={{
                    mb: 3,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    background: 'linear-gradient(90deg, #50bb4eff, #1976d2)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    letterSpacing: 1.5,
                  }}
                >
                  IHX Private Limited | Jan 2023 – Present
                </Typography>
                {/* <Typography variant="body2" sx={{ mt: 1 }}>
                  • Spearheaded NHCX project (claims processing) • Led team of 7
                  delivering ahead of schedule • Boosted revenue by 20% and
                  platform performance by 70%
                </Typography> */}
              </Card>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </Container>

      {/* Education Section */}
      <Card
        sx={{
          p: 3,
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
            background: 'linear-gradient(90deg, #ff4081, #1976d2)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            letterSpacing: 1.5,
          }}
        >
          Education 🎓
        </Typography>
        <Divider sx={{ mb: 2, background: 'rgba(255,255,255,0.2)' }} />
        <Timeline position="alternate">
          {/* College */}
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="primary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Card sx={{ p: 2, mb: 3 }}>
                <Typography variant="h6">
                  Master of Computer Applications (MCA)
                </Typography>
                <Typography variant="subtitle2" color="text.secondary">
                  Christ Deemed to be University | 2021 – 2023
                </Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  • Major: Computer Science & Engineering • Relevant coursework:
                  Data Structures, Cloud Computing, Web Development, Artificial
                  Intelligence
                </Typography>
              </Card>
            </TimelineContent>
          </TimelineItem>

          {/* High School */}
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="secondary" />
            </TimelineSeparator>
            <TimelineContent>
              <Card sx={{ p: 2, mb: 3 }}>
                <Typography variant="h6">
                  Bachelor of Computer Applications
                </Typography>
                <Typography variant="subtitle2" color="text.secondary">
                  Dr.Ambedkar College | 2018 – 2021
                </Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  • Major: Computer Science & Engineering • Relevant coursework:
                  Data Structures, Web Development
                </Typography>
              </Card>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </Card>
    </Box>
  );
}

export default Home;
