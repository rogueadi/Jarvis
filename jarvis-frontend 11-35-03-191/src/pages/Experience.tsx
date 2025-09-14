import {
  Container,
  Typography,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Paper,
} from "@mui/material";

function Experience() {
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
      ],
    },
  ];

  return (
    <Container sx={{ mt: 8 }}>
      <Typography
        variant="h3"
        gutterBottom
        sx={{
          mb: 5,
          fontWeight: "bold",
          textAlign: "center",
          background: "linear-gradient(90deg, #ff4081, #1976d2)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          letterSpacing: 2,
          textShadow: "0px 2px 6px rgba(0,0,0,0.3)",
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
                  textShadow: "0px 2px 4px rgba(0,0,0,0.2)",
                }}
              >
                {exp.role} – {exp.company}
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{
                  color: "#ccc",
                  fontStyle: "italic",
                  fontWeight: 400,
                }}
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
                    fontWeight: 400,
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

      <Paper
        square
        elevation={0}
        sx={{
          p: 2,
          mt: 3,
          background: "rgba(255,255,255,0.05)",
          borderRadius: 2,
          backdropFilter: "blur(12px)",
        }}
      >
        <Typography
          variant="body2"
          sx={{
            textAlign: "center",
            background: "linear-gradient(90deg, #ff4081, #1976d2)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontWeight: "bold",
          }}
        >
          🚀 Continuously learning, building, and growing!
        </Typography>
      </Paper>
    </Container>
  );
}

export default Experience;