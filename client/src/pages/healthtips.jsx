import { Container, Typography, Card, CardContent, Grid } from "@mui/material";

const healthTips = [
  "Drink plenty of water to stay hydrated.",
  "Exercise for at least 30 minutes every day.",
  "Eat a balanced diet with fruits and vegetables.",
  "Get at least 7-8 hours of sleep each night.",
  "Avoid processed foods and sugary drinks.",
  "Practice meditation or deep breathing for stress relief.",
  "Take regular breaks from screens to prevent eye strain.",
  "Wash your hands frequently to prevent infections.",
  "Maintain a healthy weight through diet and exercise.",
  "Stay updated on vaccinations and routine health checkups.",
];

export default function HealthTips() {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Health Tips
      </Typography>
      <Grid container spacing={3}>
        {healthTips.map((tip, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardContent>
                <Typography variant="body1">{tip}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
