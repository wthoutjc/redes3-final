import { ConnectedLayout, Layout } from "../../components/layout";

// Components
import { Inbox } from "../../components/email";

const InboxPage = () => {
  return (
    <Layout title="Inbox - EmailManager">
      <ConnectedLayout>
        <Inbox />
      </ConnectedLayout>
    </Layout>
  );
};

export default InboxPage;
