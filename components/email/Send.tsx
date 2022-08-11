import { useState } from "react";
import {
  Box,
  Button,
  CircularProgress,
  Divider,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";

// React Hook Form
import { useForm } from "react-hook-form";

// Icons
import EmailIcon from "@mui/icons-material/Email";
import SubjectIcon from "@mui/icons-material/Subject";
import MessageIcon from "@mui/icons-material/Message";
import SendIcon from "@mui/icons-material/Send";

// Redux
import { useAppDispatch } from "../../hooks";
import { INotification } from "../../interfaces";
import { newNotification, addEmail } from "../../reducers";

// uuid
import { v4 as uuid } from "uuid";

interface SendInfo {
  of: string;
  subject: string;
  message: string;
}

const Send = () => {
  const dispatch = useAppDispatch();

  const handleNotification = () => {
    const payload: INotification = {
      id: uuid(),
      title: "Success:",
      message: "Mensaje enviado correctamente.",
      severity: "success",
    };
    dispatch(newNotification(payload));
  };

  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SendInfo>();

  const onSubmit = (data: SendInfo) => {
    setLoading(true);
    dispatch(addEmail(data))
    setTimeout(() => {
      setLoading(false);
      handleNotification();
    }, 2000);
  };

  return (
    <Box sx={{ p: 2 }}>
      <Box sx={{ background: "#001122", p: 2, borderRadius: 2 }}>
        <Typography variant="h6" color="white">
          Mensaje nuevo
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)} style={{ marginTop: 20 }}>
          <Box sx={{ background: "#112233", p: 2, borderRadius: 2 }}>
            <TextField
              fullWidth
              sx={{ marginBottom: "1em" }}
              type="email"
              placeholder="Ej: pepito@redes.com"
              label="Para"
              autoComplete="of-email"
              error={!!errors.of}
              helperText={
                !!errors.of
                  ? errors.of.message
                  : "Escribe la dirección de correo electrónico del destinatario"
              }
              {...register("of", {
                required: "El destinatario es requerido",
              })}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              fullWidth
              sx={{ marginBottom: "1em" }}
              type="text"
              placeholder="Ej: Hola"
              label="Asunto"
              autoComplete="of-subject"
              error={!!errors.subject}
              helperText={
                !!errors.subject
                  ? errors.subject.message
                  : "Escribe el asunto del mensaje"
              }
              {...register("subject", {
                required: "El asunto es requerido",
              })}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SubjectIcon />
                  </InputAdornment>
                ),
              }}
            />
            <Divider sx={{ mb: 3 }} />
            <TextField
              fullWidth
              multiline
              rows={4}
              sx={{ marginBottom: "1em" }}
              type="text"
              placeholder="Ej: Hola, ¿cómo estás?"
              label="Mensaje"
              autoComplete="of-message"
              error={!!errors.message}
              helperText={
                !!errors.message
                  ? errors.message.message
                  : "Escribe el mensaje que deseas enviar"
              }
              {...register("message", {
                required: "El mensaje es requerido",
              })}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <MessageIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          <Box sx={{ position: "relative" }}>
            <Button
              type="submit"
              variant="contained"
              size="medium"
              endIcon={!loading && <SendIcon />}
              sx={{
                mt: 2,
                width: "10%",
                cursor: loading ? "wait" : "pointer",
              }}
              disabled={loading}
            >
              Enviar
            </Button>
            {loading && (
              <CircularProgress
                size={24}
                sx={{
                  position: "absolute",
                  top: 20,
                  left: 190,
                  margin: "auto",
                }}
              />
            )}
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export { Send };
