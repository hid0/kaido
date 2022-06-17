import React from "react";

const Maintenance = () => {
  return (
    <>
      <div className="container px-96 flex min-h-screen h-full items-center">
        <h1 className="text-5xl text-slate-900">We&rsquo;ll be back soon!</h1>
        <div>
          <p className="text-slate-700 text-2xl">
            Sorry for the inconvenience but we&rsquo;re performing some
            maintenance at the moment. If you need to you can always{" "}
            <a href="mailto:faizhid11@gmail.com">contact us</a>, otherwise we&rsquo;ll be back
            online shortly!
          </p>
          <p className="text-slate-800">&mdash; The Team</p>
        </div>
      </div>
    </>
  );
};

export default Maintenance;
