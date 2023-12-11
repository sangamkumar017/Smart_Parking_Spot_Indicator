
import "./App.css";

function Tada() {
  const readGoogleSheet = () => {
    // Sort results by id in descending order, take two
    // and return the age as an integer.

    fetch("https://script.googleusercontent.com/a/macros/bmsce.ac.in/echo?user_content_key=33-ADh04ViO-hcObdDWbts6Cj1cKySofJXfYMHpuZNf19ZQS3ESSWRsSajxxybtH4IxrDW2aXuQEZJEKMiZPNaTnA_4ZYXEam5_BxDlH2jW0nuo2oDemN9CCS2h10ox_nRPgeZU6HP-8Grhzzosd2iPiHc-8WGXH6tyoh_dBqg0k9RBlUWscmGZUwO8kCcZJfFWCDPCGrNnO_ZqRGzh9_OMiKrD5dKAr7dsiUwCS0B08BcHjnIIabh2uKTJ35CdIvJsw0wqpxiI&lib=M2TMiZ4jYXstySW3_oLPauQG3_idoSzAv")
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  const updateGoogleSheet = () => {
    fetch("https://script.googleusercontent.com/a/macros/bmsce.ac.in/echo?user_content_key=33-ADh04ViO-hcObdDWbts6Cj1cKySofJXfYMHpuZNf19ZQS3ESSWRsSajxxybtH4IxrDW2aXuQEZJEKMiZPNaTnA_4ZYXEam5_BxDlH2jW0nuo2oDemN9CCS2h10ox_nRPgeZU6HP-8Grhzzosd2iPiHc-8WGXH6tyoh_dBqg0k9RBlUWscmGZUwO8kCcZJfFWCDPCGrNnO_ZqRGzh9_OMiKrD5dKAr7dsiUwCS0B08BcHjnIIabh2uKTJ35CdIvJsw0wqpxiI&lib=M2TMiZ4jYXstySW3_oLPauQG3_idoSzAvid/1", {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: {
          id: "101",
        },
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  const deleteGoogleSheet = () => {
    fetch("https://sheetdb.io/api/v1/uaugppgpmtycv/id/5", {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  const createGoogleSheet = () => {
    fetch("https://sheetdb.io/api/v1/uaugppgpmtycv", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: [
          {
            id: "10",
            phone: 4364733,
          },
        ],
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  return (
    <div className="App">
     
    </div>
  );
}

export default Tada;