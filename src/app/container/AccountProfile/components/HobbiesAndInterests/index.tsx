import { yupResolver } from "@hookform/resolvers/yup";
import { TextareaControl } from "app/components/Base";
import { auth, db } from "app/services/firebase";
import { collection, doc, getDocs, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { hobbiesSchema } from "./config/validation";

const defaultValuesData: any = {
  sport: "",
  tvShow: "",
  movies: "",
  games: "",
  musics: "",
  books: "",
  writer: "",
  other: "",
};
export default function HobbiesAndInterests() {
  const [defaultValues, setDefaultValues] = useState<any>(defaultValuesData);
  const dataCollection = collection(db, "HobbiesAndInterests");
  const { control, handleSubmit, reset } = useForm({
    resolver: yupResolver(hobbiesSchema),
    mode: "onBlur",
    reValidateMode: "onChange",
    defaultValues,
  });

  const [user] = useAuthState(auth);

  const fetchHobbiesAndInterests = async () => {
    const dataCollectionSnapshot = await getDocs(dataCollection);
    const result = dataCollectionSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setDefaultValues(result.find((item: any) => item.uuid === user?.uid));
  };
  useEffect(() => {
    fetchHobbiesAndInterests();
    // eslint-disable-next-line
  }, [user]);
  useEffect(() => {
    reset(defaultValues);
    // eslint-disable-next-line
  }, [defaultValues]);

  const handleFormSubmit = async (data: any) => {
    const dataCollection = doc(db, "HobbiesAndInterests", defaultValues?.id);
    updateDoc(dataCollection, data)
      .then(() => {
        console.log("Successfully updated doc");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="ui-block">
      <div className="ui-block-title">
        <h6 className="title">Hobbies and Interests</h6>
      </div>
      <div className="ui-block-content">
        {/* Form Hobbies and Interests */}
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <div className="row">
            <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="form-group">
                <TextareaControl
                  className="form-control"
                  control={control}
                  name="sport"
                />
              </div>
              <div className="form-group">
                <TextareaControl
                  className="form-control"
                  control={control}
                  name="tvShow"
                />
              </div>
              <div className="form-group">
                <TextareaControl
                  className="form-control"
                  control={control}
                  name="movies"
                />
              </div>
              <div className="form-group">
                <TextareaControl
                  className="form-control"
                  control={control}
                  name="games"
                />
              </div>
            </div>
            <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="form-group">
                <TextareaControl
                  className="form-control"
                  control={control}
                  name="musics"
                />
              </div>
              <div className="form-group">
                <TextareaControl
                  className="form-control"
                  control={control}
                  name="books"
                />
              </div>
              <div className="form-group">
                <TextareaControl
                  className="form-control"
                  control={control}
                  name="writer"
                />
              </div>
              <div className="form-group">
                <TextareaControl
                  className="form-control"
                  control={control}
                  name="other"
                />
              </div>
              <button
                className="btn btn-primary btn-lg full-width"
                type="submit"
              >
                Save all Changes
              </button>
            </div>
          </div>
        </form>
        {/* ... end Form Hobbies and Interests */}
      </div>
    </div>
  );
}
