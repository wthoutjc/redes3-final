import { Box, Button, Divider, Typography } from "@mui/material";
import type { NextPage } from "next";

// Components
import { Layout } from "../components/layout";

const Home: NextPage = () => {
  return (
    <>
      <Layout title={"Home - EmailManager"}>
        <Box className="index__container">
          <Box className="index__landing">
            <Typography variant="h2" sx={{ fontWeight: "bold" }}>
              EmailManager
            </Typography>
            <Typography variant="h5">Presentado por:</Typography>
            <ul>
              <li>Juan Camilo Ramírez Rátiva	-	 20181020089</li>
              <li>Esthefania Rivera Jiménez  	 -  	20172020040</li>
              <li>Oscar Javier Garzón Fonseca  	- 	20172020127</li>
            </ul>
          </Box>
        </Box>
      </Layout>
    </>
  );
};

export default Home;
