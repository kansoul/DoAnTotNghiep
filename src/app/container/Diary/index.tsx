import FullCalendar from "@fullcalendar/react";
import DefaultLayout from "app/layouts";
import dayGridPlugin from "@fullcalendar/daygrid";
import AddDiary from "./component/addDiary";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useEffect, useState } from "react";
import { query, where, getDocs, collection } from "firebase/firestore";
import { auth, db } from "app/services/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import ViewDiary from "./component/viewDiary";

export default function Diary() {
  const [openAddDiary, setOpenAddDiary] = useState<boolean>(false);
  const [openViewDiary, setOpenViewDiary] = useState<boolean>(false);

  const [datePicker, setDatePicker] = useState<boolean>();
  const dataCollectionDiary = collection(db, "Diary");
  const [eventList, setEventList] = useState<any>([]);
  const [eventCal, setEventCal] = useState<any | null>(null);
  const [viewEvent, setViewEvent] = useState<any>();

  const [user] = useAuthState(auth);

  const handleAddDiary = (arg) => {
    setDatePicker(arg?.dateStr);
    setOpenAddDiary(true);
  };

  const fetchEventCal = async () => {
    setEventCal([]);
    const data: any = [];
    const q = query(dataCollectionDiary, where("uid", "==", user?.uid));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      data.push({ idDoc: doc.id, ...doc.data() });
    });
    setEventCal(data);
  };
  useEffect(() => {
    fetchEventCal();
    return () => {
      fetchEventCal();
    };
    // eslint-disable-next-line
  }, [user]);

  useEffect(() => {
    setEventList(
      eventCal && eventCal.map(({ id, title, date }) => ({ id, title, date }))
    );
    // eslint-disable-next-line
  }, [eventCal]);

  const handleViewDiary = (e) => {
    setViewEvent(eventCal.find((value) => value.id === e.event.id));
    setOpenViewDiary(true);
  };

  const reloadData = () => {
    fetchEventCal();
  };

  return (
    <>
      <DefaultLayout />
      <div className="main-header">
        <div className="content-bg-wrap bg-events" />
        <div className="container">
          <div className="row">
            <div className="col col-lg-8 m-auto col-md-8 col-sm-12 col-12">
              <div className="main-header-content">
                <h1>Thêm và chỉnh sửa nhật ký của bạn</h1>
                <p>
                  Chào mừng bạn đến với trang viết nhật ký. Tại đây bạn có thể
                  lưu chữ, chỉnh sửa, xóa nhật ký của bản thân, và chia sẽ nó
                  đến với bạn bè của mình!
                </p>
              </div>
            </div>
          </div>
        </div>
        <img
          loading="lazy"
          className="img-bottom"
          src="img/event-bottom.webp"
          alt="friends"
          width={1169}
          height={146}
        />
      </div>
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
          events={eventList}
          eventClick={(e) => {
            handleViewDiary(e);
          }}
          dateClick={handleAddDiary}
        />
      </div>
      {viewEvent && openViewDiary && (
        <ViewDiary
          dataDiary={viewEvent}
          openViewDiary={openViewDiary}
          setOpenViewDiary={setOpenViewDiary}
          reloadData={reloadData}
        />
      )}
      {datePicker && openAddDiary && (
        <AddDiary
          openAddDiary={openAddDiary}
          setOpenAddDiary={setOpenAddDiary}
          datePicker={datePicker}
          reloadData={reloadData}
        />
      )}
    </>
  );
}
