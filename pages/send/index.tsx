import { ConnectedLayout, Layout } from "../../components/layout";

// Components
import { Send } from "../../components/email";

const SendPage = () => {
  return (
    <Layout title="Send Email - EmailManager">
      <ConnectedLayout>
        <Send />
      </ConnectedLayout>
    </Layout>
  );
};

export default SendPage;
