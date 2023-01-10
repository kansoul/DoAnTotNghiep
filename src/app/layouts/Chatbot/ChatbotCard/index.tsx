import { Markup } from "interweave";
import { dateTimeFormat } from "utils/datetime";

export default function ChatBotCard(props: { data: any }) {
  const { data } = props;
  return data?.userMessage ? (
    <li style={{ display: "flex", padding: "5px", marginRight: "5px" }}>
      <div
        style={{
          marginLeft: "30%",
          width: "70%",
        }}
      >
        <div
          style={{
            background: "#2aebcb",
            color: "#fff",
            borderRadius: "13px",
            padding: "10px",
          }}
        >
          <span style={{ width: "100%", wordBreak: "break-word" }}>
            {data?.text}
          </span>
        </div>
        <span
          style={{
            fontSize: "11px",
            marginLeft: "60%",
          }}
        >
          {data?.sendAt}
        </span>
      </div>
    </li>
  ) : (
    <li style={{ display: "flex", padding: "5px", marginLeft: "5px" }}>
      <div
        style={{
          marginRight: "30%",
          width: "70%",
        }}
      >
        <div
          style={{
            background: "#defce6",
            borderRadius: "13px",
            color: "black",
            padding: "10px",
          }}
        >
          <span style={{ width: "100%", wordBreak: "break-word" }}>
            {data?.text}
          </span>
        </div>
        <span
          style={{
            fontSize: "11px",
          }}
        >
          {data?.sendAt}
        </span>
      </div>
    </li>
  );
}
