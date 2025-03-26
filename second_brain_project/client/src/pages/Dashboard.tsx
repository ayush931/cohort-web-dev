import { useState } from "react";
import Button from "../components/Button";
import Card from "../components/Card";
import CreateContentModal from "../components/CreateContentModal";
import PlusIcon from "../icons/PlusIcon";
import ShareIcon from "../icons/ShareIcon";
import Sidebar from "../components/Sidebar";
import useContent from "../hooks/useContent";

function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);
  const contents = useContent();
  return (
    <div>
      <Sidebar />
      <div className="p-4 ml-72 min-h-screen bg-gray-100">
        <CreateContentModal
          open={modalOpen}
          onClose={() => {
            setModalOpen(false);
          }}
        />
        <div className="flex items-center justify-end gap-4">
          <Button
            onClick={() => setModalOpen(true)}
            variant="primary"
            text="Add content"
            startIcon={<PlusIcon />}
          />
          <Button
            variant="secondary"
            text="Share Brain"
            startIcon={<ShareIcon />}
          />
        </div>
        <div className="flex gap-4">
          {contents.map(({ title, link, type }) => <Card
            title={title}
            type={type}
            link={link}
          />)}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
