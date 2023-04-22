import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import AreaCard from "@/components/areas/area-card";

export default function AreaList() {
  return (
    <Box sx={{ padding: "20px" }}>
      <Container maxWidth="sm">
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <AreaCard />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
