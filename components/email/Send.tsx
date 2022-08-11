import {
  Box,
  Button,
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

interface SendInfo {
  to: string;
  subject: string;
  message: string;
}

const Send = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SendInfo>();

  return (
    <Box sx={{ p: 2 }}>
      <Box sx={{ background: "#001122", p: 2, borderRadius: 2 }}>
        <Typography variant="h6" color="white">
          Mensaje nuevo
        </Typography>
        <form style={{ marginTop: 20 }}>
          <Box sx={{ background: "#112233", p: 2, borderRadius: 2 }}>
            <TextField
              fullWidth
              sx={{ marginBottom: "1em" }}
              type="email"
              placeholder="Ej: pepito@redes.com"
              label="Para"
              autoComplete="to-email"
              error={!!errors.to}
              helperText={
                !!errors.to
                  ? errors.to.message
                  : "Escribe la dirección de correo electrónico del destinatario"
              }
              {...register("to", {
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
              autoComplete="to-subject"
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
              autoComplete="to-message"
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
          <Button
            variant="contained"
            size="medium"
            endIcon={<SendIcon />}
            sx={{ mt:2, width: "10%" }}
          >
            Enviar
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export { Send };
