import {
  Container,
  Typography,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Paper,
  Box,
  Chip,
} from "@mui/material";

function Resume() {
  const experiences = [
    {
      role: "Software Engineer",
      company: "Mergerware Private Limited",
      date: "May 2025 – Present | Bangalore, India",
      details: [
        "Built a multi-tenant CRM with Nest.js & Meteor.js",
        "Developed Gmail & Outlook extensions for email logging & deals",
        "Designed CI/CD pipelines with Docker & GitHub Actions, deployed on AWS",
        "Implemented secure REST APIs with dynamic MongoDB connections",
      ],
    },
    {
      role: "Software Engineer",
      company: "IHX Private Limited",
      date: "Jan 2023 – May 2025 | Bangalore, India",
      details: [
        "Spearheaded NHCX project for centralized claims processing",
        "Led a team of 5 developers + 2 QA, delivering ahead of schedule",
        "Boosted business revenue by 20% with improved claims throughput",
        "Enhanced platform performance by 70% & usability by 40%",
        "Pioneered PoCs for Video KYC integration",
      ],
    },
  ];

  const education = [
    {
      degree: "Master of Computer Applications",
      college: "Christ Deemed to be University, Bangalore",
      date: "May 2021 – May 2023",
    },
    {
      degree: "Bachelor of Computer Applications",
      college: "Dr. Ambedkar College, Nagpur",
      date: "May 2018 – May 2021",
    },
  ];

  const skills = {
    "Languages / Database": ["Python", "MongoDB", "S3"],
    "Web Technologies": [
      "React.js",
      "Redux",
      "Saga",
      "Node.js",
      "Meteor.js",
      "Docker",
      "React Native",
      "HTML",
      "CSS",
      "JavaScript",
      "Jest",
    ],
    "Software & Tools": ["Linux", "Git", "AWS", "Google Cloud", "Android Studio", "GitHub"],
    "Other Skills": ["CI/CD", "Debugging"],
  };

  return (
    <Container sx={{ mt: 8 }}>
      {/* ================= Profile Summary ================= */}
      <Typography
        variant="h3"
        gutterBottom
        sx={{
          mb: 3,
          fontWeight: "bold",
          textAlign: "center",
          background: "linear-gradient(90deg, #ff4081, #1976d2)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          letterSpacing: 1.5,
          textShadow: "0px 2px 6px rgba(0,0,0,0.3)",
        }}
      >
        Resume 📄
      </Typography>

      <Paper
        elevation={0}
        sx={{
          p: 3,
          mb: 6,
          borderRadius: 3,
          background: "rgba(255,255,255,0.05)",
          backdropFilter: "blur(10px)",
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
          Profile Summary
        </Typography>
        <Typography variant="body1" sx={{ color: "rgba(255,255,255,0.9)" }}>
          Software Engineer with expertise in full-stack development, cloud integration, and 
          building scalable SaaS solutions. Skilled in frontend and backend technologies, 
          specializing in creating user-friendly applications and robust backend systems. 
          Experienced in CI/CD, DevOps, and cloud platforms with a strong problem-solving mindset.
        </Typography>
      </Paper>

      {/* ================= Experience ================= */}
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          fontWeight: "bold",
          mb: 3,
          background: "linear-gradient(90deg, #ff4081, #1976d2)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Experience 💼
      </Typography>

      <Stepper orientation="vertical">
        {experiences.map((exp, index) => (
          <Step active key={index}>
            <StepLabel>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  background: "linear-gradient(90deg, #00c6ff, #0072ff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {exp.role} – {exp.company}
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{ color: "#ccc", fontStyle: "italic" }}
              >
                {exp.date}
              </Typography>
            </StepLabel>
            <StepContent>
              {exp.details.map((point, i) => (
                <Typography
                  key={i}
                  variant="body1"
                  sx={{
                    mb: 1,
                    color: "rgba(255,255,255,0.9)",
                    "&::before": {
                      content: '"• "',
                      color: "#ff4081",
                      fontWeight: "bold",
                    },
                  }}
                >
                  {point}
                </Typography>
              ))}
            </StepContent>
          </Step>
        ))}
      </Stepper>

      {/* ================= Education ================= */}
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          fontWeight: "bold",
          mt: 6,
          mb: 3,
          background: "linear-gradient(90deg, #ff4081, #1976d2)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Education 🎓
      </Typography>

      <Stepper orientation="vertical">
        {education.map((edu, index) => (
          <Step active key={index}>
            <StepLabel>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  background: "linear-gradient(90deg, #43e97b, #38f9d7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {edu.degree}
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{ color: "#ccc", fontStyle: "italic" }}
              >
                {edu.college} | {edu.date}
              </Typography>
            </StepLabel>
          </Step>
        ))}
      </Stepper>

      {/* ================= Skills ================= */}
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          fontWeight: "bold",
          mt: 6,
          mb: 3,
          background: "linear-gradient(90deg, #ff4081, #1976d2)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Technical Skills 🛠️
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
          mb: 6,
        }}
      >
        {Object.entries(skills).map(([category, items], idx) => (
          <Box key={idx}>
            <Typography
              variant="h6"
              sx={{
                mb: 1,
                fontWeight: "bold",
                color: "#ff4081",
              }}
            >
              {category}
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
              {items.map((skill, i) => (
                <Chip
                  key={i}
                  label={skill}
                  sx={{
                    background: "rgba(255,255,255,0.1)",
                    color: "white",
                    border: "1px solid rgba(255,255,255,0.2)",
                  }}
                />
              ))}
            </Box>
          </Box>
        ))}
      </Box>
    </Container>
  );
}

export default Resume;