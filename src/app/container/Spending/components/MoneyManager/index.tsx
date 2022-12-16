import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import { auth, db } from "app/services/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Spending } from "types/Spending";
import MoneySpending from "../MoneySpending";
import AddSpending from "./components/AddSpending";
import EditSpending from "./components/EditSpending";
import "./index.css";

export default function MoneyManager() {
  const [openSpending, setOpenSpending] = useState<boolean>(false);
  const [openEditSpending, setOpenEditSpending] = useState<boolean>(false);
  const [viewEvent, setViewEvent] = useState<any>();

  const dataCollectionSpending = collection(db, "Spending");
  const [spendingList, setSpendingList] = useState<Spending[]>([]);
  const [datePicker, setDatePicker] = useState<boolean>();

  function renderEventContent(eventInfo: any) {
    const { event } = eventInfo;
    const { title, backgroundColor } = event;
    return (
      <div
        style={{
          backgroundColor: backgroundColor,
          color: "black",
          textAlign: "center",
          border: "0",
        }}
      >
        {title}
      </div>
    );
  }
  const handleAddDiary = (arg) => {
    setDatePicker(arg?.dateStr);
    setOpenSpending(true);
  };

  const [user] = useAuthState(auth);

  const handleFetchSpending = async () => {
    const q = query(dataCollectionSpending, where("uid", "==", user?.uid));
    const querySnapshot = await getDocs(q);
    const data: any = [];
    querySnapshot.forEach((doc: any) => {
      data.push({ idDoc: doc.id, ...doc.data() });
    });
    setSpendingList(data);
  };
  useEffect(() => {
    handleFetchSpending();
    // eslint-disable-next-line
  }, [user]);

  const reloadData = () => {
    handleFetchSpending();
  };

  const handleViewSpending = (e) => {
    setViewEvent(spendingList.find((value) => value.id === e.event.id));
    setOpenEditSpending(true);
  };

  return (
    <>
      <div className="app-container">
        <div className="responsive-container">
          <div className="header-container"></div>
          <MoneySpending spendingList={spendingList} />
          <div
            style={{
              marginInline: "10px",
              padding: "10px",
              background: "#fff",
              color: "#000",
            }}
            className="default-diary"
          >
            <FullCalendar
              plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
              initialView="dayGridMonth"
              selectable={true}
              dayMaxEventRows={4}
              dayMaxEvents={3}
              views={{
                timeGrid: {
                  dayMaxEventRows: 3,
                  eventLimit: 3,
                },
              }}
              contentHeight={750}
              dayPopoverFormat={{ day: "numeric" }}
              events={spendingList}
              eventClick={(e) => {
                handleViewSpending(e);
              }}
              eventContent={renderEventContent} // custom render function
              dateClick={handleAddDiary}
            />
          </div>
        </div>
      </div>
      {openSpending && datePicker && (
        <AddSpending
          openSpendingPopup={openSpending}
          setOpenSpendingPopup={setOpenSpending}
          datePicker={datePicker}
          reloadData={reloadData}
          spendingList={spendingList}
        />
      )}
      {openEditSpending && viewEvent && (
        <EditSpending
          openEditSpending={openEditSpending}
          setOpenEditSpending={setOpenEditSpending}
          viewEvent={viewEvent}
          reloadData={reloadData}
        />
      )}
    </>
  );
}
