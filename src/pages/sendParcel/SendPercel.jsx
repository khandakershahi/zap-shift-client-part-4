import React from "react";
import { useForm, useWatch, Watch } from "react-hook-form";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const SendPercel = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const serviceCenters = useLoaderData();
  const regionsDuplicate = serviceCenters.map((c) => c.region);
  const regions = [...new Set(regionsDuplicate)];
  // explore useMemo, useCallback
  const senderRegion = useWatch({ control, name: "senderRegion" });
  const receiverRegion = useWatch({ control, name: "receiverRegion" });

  const districtByRegion = (region) => {
    const regionDistrics = serviceCenters.filter((c) => c.region === region);
    const districts = regionDistrics.map((d) => d.district);
    return districts;
  };

  // console.log(regions);

  const handleSendPercel = (data) => {
    console.log(data);
    const isDocument = data.percelType === "document";
    const isSameDistrict = data.senderDistrict === data.receiverDistrict;
    const parcelWeight = parseFloat(data.parcelWeight);

    let cost = 0;
    if (isDocument) {
      cost = isSameDistrict ? 60 : 80;
    } else {
      if (parcelWeight < 3) {
        cost = isSameDistrict ? 110 : 150;
      } else {
        const minCharge = isSameDistrict ? 110 : 150;
        const extraWeight = parcelWeight - 3;
        const extraCharge = isSameDistrict
          ? extraWeight * 40
          : extraWeight * 80;
        cost = minCharge + extraCharge;
      }
    }

    console.log("cost", cost);
    Swal.fire({
      title: "Agree with the cost?",
      text: `You will be charged ${cost} taka!`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, take my percel",
    }).then((result) => {
      if (result.isConfirmed) {
        
        //
        
        // Swal.fire({
        //   title: "Confirm!",
        //   text: "Your file has been deleted.",
        //   icon: "success",
        // });
      }
    });
  };

  return (
    <div>
      <h2 className="text-5xl font-bold">Send A Percel</h2>
      <form
        onSubmit={handleSubmit(handleSendPercel)}
        className="mt-12 p-4 text-black"
      >
        {/* percel type*/}
        <div>
          <label className="label mr-4">
            <input
              type="radio"
              value="document"
              {...register("percelType")}
              className="radio"
              defaultChecked
            />
            Document
          </label>
          <label className="label">
            <input
              type="radio"
              value="non-document"
              {...register("percelType")}
              className="radio"
            />
            Non-Document
          </label>
        </div>
        {/* percel info : name, weight */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 my-8">
          <fieldset className="fieldset">
            <label className="label">Percel Name</label>
            <input
              type="text"
              {...register("percelName")}
              className="input w-full"
              placeholder="Percel Name"
            />
          </fieldset>
          <fieldset className="fieldset">
            <label className="label">Percel Weight</label>
            <input
              type="number"
              {...register("parcelWeight")}
              className="input w-full"
              placeholder="Percel Weight"
            />
          </fieldset>
        </div>

        {/* two column*/}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* sender info*/}

          <div>
            <fieldset className="fieldset">
              <h4 className="text-2xl font-semibold">Sender Details</h4>
              {/* sender name*/}
              <label className="label">Sender Name</label>
              <input
                type="text"
                {...register("senderName")}
                className="input w-full"
                placeholder="Sender Name"
              />
              {/* sender email*/}
              <label className="label">Sender Email</label>
              <input
                type="email"
                {...register("senderemail")}
                className="input w-full"
                placeholder="Sender Email"
              />
              {/* sender region */}
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Sender Region</legend>
                <select
                  {...register("senderRegion")}
                  defaultValue="Pick a Region"
                  className="select"
                >
                  <option disabled={true}>Pick a Region</option>
                  {regions.map((r, i) => (
                    <option key={i} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </fieldset>

              {/* sender districts */}
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Sender District</legend>
                <select
                  {...register("senderDistrict")}
                  defaultValue="Pick a District"
                  className="select"
                >
                  <option disabled={true}>Pick a District</option>
                  {districtByRegion(senderRegion).map((r, i) => (
                    <option key={i} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </fieldset>

              {/* sender address*/}
              <label className="label mt-4">Address</label>
              <input
                type="text"
                {...register("senderAddress")}
                className="input w-full"
                placeholder="Sender Address"
              />
              {/* sender Phone*/}
              <label className="label mt-4">Phone</label>
              <input
                type="text"
                {...register("senderPhone")}
                className="input w-full"
                placeholder="Sender Phone"
              />
            </fieldset>
          </div>
          {/* receiver info*/}
          <fieldset className="fieldset">
            <h4 className="text-2xl font-semibold">Receiver Details</h4>
            {/* receiver name*/}
            <label className="label">Receiver Name</label>
            <input
              type="text"
              {...register("receiverName")}
              className="input w-full"
              placeholder="Receiver Name"
            />
            {/* receiver email*/}
            <label className="label">Receiver Email</label>
            <input
              type="email"
              {...register("receiveremail")}
              className="input w-full"
              placeholder="Receiver Email"
            />

            {/* receiver region */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Receiver Region</legend>
              <select
                {...register("receiverRegion")}
                defaultValue="Pick a Region"
                className="select"
              >
                <option disabled={true}>Pick a Region</option>
                {regions.map((r, i) => (
                  <option key={i} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </fieldset>

            {/* receiver districts */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Receiver District</legend>
              <select
                {...register("receiverDistrict")}
                defaultValue="Pick a District"
                className="select"
              >
                <option disabled={true}>Pick a District</option>
                {districtByRegion(receiverRegion).map((d, i) => (
                  <option key={i} value={d}>
                    {d}
                  </option>
                ))}
              </select>
            </fieldset>

            {/* receiver address*/}
            <label className="label mt-4">Address</label>
            <input
              type="text"
              {...register("receiverAddress")}
              className="input w-full"
              placeholder="Receiver Address"
            />
            {/* receiver Phone*/}
            <label className="label mt-4">Phone</label>
            <input
              type="text"
              {...register("receiverPhone")}
              className="input w-full"
              placeholder="Receiver Phone"
            />
          </fieldset>
        </div>
        <input
          type="submit"
          value="Send Percel"
          className="btn btn-primary text-secondary mt-4"
        />
      </form>
    </div>
  );
};

export default SendPercel;
