import FModal from "@/components/Shared/Modal/FModal";
import { toast } from "sonner";
type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const ShowCredentialModal = ({ open, setOpen }: TProps) => {
  const handleCopyText = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        toast.success("Copied successfully");
      })
      .catch((err: any) => {
        console.log(err);
        toast.error("Failed to copy");
      });
  };
  return (
    <div>
      <FModal title="Credentials" open={open} setOpen={setOpen}>
        <div style={{ minWidth: "300px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "4px" }}>
            Normal User:
          </h3>
          <div
            style={{
              border: "1px solid gray",
              padding: "3px",
              fontSize: "17px",
              marginBottom: "5px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <p> Email: manik@gmail.com </p>
            <svg
              onClick={() => handleCopyText("manik@gmail.com")}
              style={{ cursor: "pointer" }}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"
              />
            </svg>
          </div>
          <div
            style={{
              border: "1px solid gray",
              padding: "3px",
              fontSize: "17px",
              marginBottom: "5px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <p> Password: manik123</p>
            <svg
              onClick={() => handleCopyText("manik123")}
              style={{ cursor: "pointer" }}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"
              />
            </svg>
          </div>
        </div>
        <div style={{ marginTop: "15px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "4px" }}>Admin:</h3>
          <div
            style={{
              border: "1px solid gray",
              padding: "3px",
              fontSize: "17px",
              marginBottom: "5px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <p> Password: admin@gmail.com </p>
            <svg
              onClick={() => handleCopyText("admin@gmail.com")}
              style={{ cursor: "pointer" }}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"
              />
            </svg>
          </div>
          <div
            style={{
              border: "1px solid gray",
              padding: "3px",
              fontSize: "17px",
              marginBottom: "5px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <p> Password: admin123 </p>
            <svg
              onClick={() => handleCopyText("admin123")}
              style={{ cursor: "pointer" }}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"
              />
            </svg>
          </div>
        </div>
      </FModal>
    </div>
  );
};

export default ShowCredentialModal;
