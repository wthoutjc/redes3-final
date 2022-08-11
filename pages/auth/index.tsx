import React, { useEffect, useMemo, useState } from "react";
import {
  Box,
  Button,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { Layout, AuthLayout } from "../../components/layout";

// Redux
import { useAppSelector, useAppDispatch } from "../../hooks";
import { incrementClicks } from "../../reducers";

// Icons
import PasswordIcon from "@mui/icons-material/Password";
import EmailIcon from "@mui/icons-material/Email";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";

// React Hook Form
import { useForm } from "react-hook-form";
import { validations } from "../../utils";

// Next Auth
import { signIn } from "next-auth/react";

interface LoginInfo {
  name: string;
  password: string;
}

const LogInPage = () => {
  const dispatch = useAppDispatch();

  const { ux } = useAppSelector((state) => state);

  const clicksCurrent = useMemo(() => ux.clicks, [ux.clicks]);

  const [clicked, setClicked] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInfo>();

  const onLoginUser = async ({ name, password }: LoginInfo) => {
    await signIn("credentials", { name, password });
  };

  useEffect(() => {
    if (clicked) {
      dispatch(incrementClicks());
    }
  }, [clicked, dispatch]);

  return (
    <Layout title={"EmailManager - Login"}>
      <AuthLayout>
        <form onSubmit={handleSubmit(onLoginUser)}>
          <Box className="login__container">
            <Box
              className={
                clicksCurrent > 1
                  ? "login__left login__animation-toRight"
                  : "login__left fade-animation"
              }
            >
              <Typography variant="h4">Iniciar sesión</Typography>
              <Box
                sx={{ boxSizing: "border-box", padding: "1em", width: "100%" }}
              >
                <TextField
                  fullWidth
                  sx={{ marginBottom: "1em" }}
                  type="name"
                  placeholder="Ej: pepito"
                  label="Nombre de usuario"
                  autoComplete="username"
                  error={!!errors.name}
                  helperText={
                    !!errors.name
                      ? errors.name.message
                      : "Escribe tu nombre de usuario..."
                  }
                  {...register("name", {
                    required: "Nombre de usuario requerido",
                  })}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PeopleAltRoundedIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  fullWidth
                  placeholder="Contraseña"
                  type="password"
                  label="Contraseña"
                  error={!!errors.password}
                  autoComplete="current-password"
                  helperText={
                    !!errors.password
                      ? errors.password.message
                      : "Escribe tu contraseña..."
                  }
                  {...register("password", {
                    required: "Contraseña requerida",
                    minLength: {
                      value: 6,
                      message: "La contraseña debe tener al menos 6 caracteres",
                    },
                  })}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PasswordIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  sx={{ mt: 2 }}
                >
                  CONECTAR
                </Button>
              </Box>
            </Box>
            <Box
              className={
                clicksCurrent > 1
                  ? "login__right login__animation-toLeft"
                  : "login__right fade-animation"
              }
            >
              <Typography variant="h4" className="fade-animation">
                ¡Bienvenido!
              </Typography>
              <Typography variant="body1" className="fade-animation">
                Para mantenerte conectado, inicia sesión con tus datos
                personales.
              </Typography>
            </Box>
          </Box>
        </form>
      </AuthLayout>
    </Layout>
  );
};

export default LogInPage;
