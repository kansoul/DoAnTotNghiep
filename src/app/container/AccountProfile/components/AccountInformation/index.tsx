import { auth, db } from "app/services/firebase";
import { collection, doc, getDocs, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";

const defaultValuesData: any = {
  firstName: "",
  email: "",
  birthday: "",
  lastName: "",
  yourWebsite: "",
  phoneNumber: "",
  country: "",
  province: "",
  city: "",
  about: "",
  gender: "",
  belifs: "",
  birthplace: "",
  occupation: "",
  status: "",
  incline: "",
  fb: "",
  twitter: "",
  rss: "",
  dribbble: "",
  spotify: "",
};
export default function AccountInformation() {
  const [defaultValues, setDefaultValues] = useState<any>(defaultValuesData);
  const dataCollection = collection(db, "Users");
  const { register, handleSubmit, reset } = useForm({
    defaultValues,
  });

  const [user] = useAuthState(auth);

  const fetchAccountInfor = async () => {
    const dataCollectionSnapshot = await getDocs(dataCollection);
    const result = dataCollectionSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setDefaultValues(result.find((item: any) => item.uid === user?.uid));
  };
  useEffect(() => {
    fetchAccountInfor();
    // eslint-disable-next-line
  }, [user]);
  const handleFormSubmit = async (data: any) => {
    const dataCollection = doc(db, "Users", defaultValues?.id);
    updateDoc(dataCollection, data)
      .then(() => {
        console.log("Successfully updated doc");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    reset(defaultValues);
    // eslint-disable-next-line
  }, [defaultValues]);

  return (
    <div className="col col-xl-9 order-xl-2 col-lg-9 order-lg-2 col-md-12 order-md-1 col-sm-12 col-12">
      <div className="ui-block">
        <div className="ui-block-title">
          <h6 className="title">Personal Information</h6>
        </div>
        <div className="ui-block-content">
          {/* Personal Information Form  */}
          <form onSubmit={handleSubmit(handleFormSubmit)}>
            <div className="row">
              <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="form-group label-floating">
                  <label className="control-label">First Name</label>
                  <input
                    {...register("firstName")}
                    className="form-control"
                    type="text"
                  />
                </div>
                <div className="form-group label-floating">
                  <label className="control-label">Your Email</label>
                  <input
                    {...register("email")}
                    className="form-control"
                    type="email"
                  />
                </div>
                <div className="form-group date-time-picker label-floating">
                  <label className="control-label">Your Birthday</label>
                  <input
                    {...register("birthday")}
                    name="birthday"
                    type="date"
                  />
                  <span className="input-group-addon">
                    <svg className="olymp-month-calendar-icon icon">
                      <use xlinkHref="#olymp-month-calendar-icon" />
                    </svg>
                  </span>
                </div>
              </div>
              <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="form-group label-floating">
                  <label className="control-label">Last Name</label>
                  <input
                    {...register("lastName")}
                    className="form-control"
                    type="text"
                    name="lastName"
                  />
                </div>
                <div className="form-group label-floating">
                  <label className="control-label">Your Website</label>
                  <input
                    {...register("yourWebsite")}
                    className="form-control"
                    type="text"
                    name="yourWebsite"
                  />
                </div>
                <div className="form-group label-floating is-empty">
                  <label className="control-label">Your Phone Number</label>
                  <input
                    {...register("phoneNumber")}
                    className="form-control"
                    type="text"
                    name="phoneNumber"
                  />
                </div>
              </div>
              <div className="col col-lg-4 col-md-4 col-sm-12 col-12">
                <div className="form-group label-floating is-select">
                  <label className="control-label">Your Country</label>
                  <select
                    {...register("country")}
                    name="country"
                    className="form-select"
                  >
                    <option value="US">United States</option>
                    <option value="AU">Australia</option>
                  </select>
                </div>
              </div>
              <div className="col col-lg-4 col-md-4 col-sm-12 col-12">
                <div className="form-group label-floating is-select">
                  <label className="control-label">Your State / Province</label>
                  <select
                    {...register("province")}
                    name="province"
                    className="form-select"
                  >
                    <option value="CA">California</option>
                    <option value="TE">Texas</option>
                  </select>
                </div>
              </div>
              <div className="col col-lg-4 col-md-4 col-sm-12 col-12">
                <div className="form-group label-floating is-select">
                  <label className="control-label">Your City</label>
                  <select
                    {...register("city")}
                    name="city"
                    className="form-select"
                  >
                    <option value="SF">San Francisco</option>
                    <option value="NY">New York</option>
                  </select>
                </div>
              </div>
              <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="form-group">
                  <label className="control-label">About you</label>
                  <textarea
                    {...register("about")}
                    name="about"
                    className="form-control"
                    placeholder="Write a little description about you"
                  />
                </div>
                <div className="form-group label-floating is-select">
                  <label className="control-label">Your Gender</label>
                  <select
                    {...register("gender")}
                    name="gender"
                    className="form-select"
                  >
                    <option value="MA">Male</option>
                    <option value="FE">Female</option>
                  </select>
                </div>
                <div className="form-group label-floating is-empty">
                  <label className="control-label">Religious Belifs</label>
                  <input
                    {...register("belifs")}
                    name="belifs"
                    className="form-control"
                    type="text"
                  />
                </div>
              </div>
              <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="form-group label-floating is-empty">
                  <label className="control-label">Your Birthplace</label>
                  <input
                    {...register("birthplace")}
                    name="birthplace"
                    className="form-control"
                    type="text"
                  />
                </div>
                <div className="form-group label-floating">
                  <label className="control-label">Your Occupation</label>
                  <input
                    {...register("occupation")}
                    name="occupation"
                    className="form-control"
                    type="text"
                  />
                </div>
                <div className="form-group label-floating is-select">
                  <label className="control-label">Status</label>
                  <select
                    {...register("status")}
                    name="status"
                    className="form-select"
                  >
                    <option value="MA">Married</option>
                    <option value="FE">Not Married</option>
                  </select>
                </div>
                <div className="form-group label-floating">
                  <label className="control-label">Political Incline</label>
                  <input
                    {...register("incline")}
                    name="incline"
                    className="form-control"
                    type="text"
                  />
                </div>
              </div>
              <div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="form-group with-icon label-floating">
                  <label className="control-label">Your Facebook Account</label>
                  <input
                    {...register("fb")}
                    name="fb"
                    className="form-control"
                    type="text"
                  />
                  <svg className="c-facebook" width={20} height={20}>
                    <use xlinkHref="#olymp-facebook-icon" />
                  </svg>
                </div>
                <div className="form-group with-icon label-floating">
                  <label className="control-label">Your Twitter Account</label>
                  <input
                    {...register("twitter")}
                    name="twitter"
                    className="form-control"
                    type="text"
                    defaultValue="www.twitter.com/james_spiegelOK"
                  />
                  <svg className="c-twitter" width={20} height={20}>
                    <use xlinkHref="#olymp-twitter-icon" />
                  </svg>
                </div>
                <div className="form-group with-icon label-floating is-empty">
                  <label className="control-label">Your RSS Feed Account</label>
                  <input
                    {...register("rss")}
                    name="rss"
                    className="form-control"
                    type="text"
                  />
                  <svg className="c-rss" width={20} height={20}>
                    <use xlinkHref="#olymp-rss-icon" />
                  </svg>
                </div>
                <div className="form-group with-icon label-floating">
                  <label className="control-label">Your Dribbble Account</label>
                  <input
                    {...register("dribbble")}
                    name="dribbble"
                    className="form-control"
                    type="text"
                  />
                  <svg className="c-dribbble" width={20} height={20}>
                    <use xlinkHref="#olymp-dribble-icon" />
                  </svg>
                </div>
                <div className="form-group with-icon label-floating is-empty">
                  <label className="control-label">Your Spotify Account</label>
                  <input
                    {...register("spotify")}
                    name="spotify"
                    className="form-control"
                    type="text"
                  />
                  <svg className="c-spotify" width={20} height={20}>
                    <use xlinkHref="#olymp-spotify-icon" />
                  </svg>
                </div>
              </div>
              <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
                <button
                  className="btn btn-secondary btn-lg full-width"
                  type="button"
                  onClick={() => reset(defaultValuesData)}
                >
                  Restore all Attributes
                </button>
              </div>
              <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
                <button
                  className="btn btn-primary btn-lg full-width"
                  type="submit"
                >
                  Save all Changes
                </button>
              </div>
            </div>
          </form>
          {/* ... end Personal Information Form  */}
        </div>
      </div>
    </div>
  );
}
