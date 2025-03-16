import React from "react";

function ShippingnDeliveryTab() {
  return (
    <>
      <div className="flex flex-col lg:flex-row items-start gap-4">
        <img src="/shipping.jpg" alt="" />
        <div className="flex flex-col">
          <p className="text-sm">
            Vestibulum curae torquent diam diam commodo parturient penatibus
            nunc dui adipiscing convallis bulum parturient suspendisse
            parturient a.Parturient in parturient scelerisque nibh lectus quam a
            natoque adipiscing a vestibulum hendrerit et pharetra
            fames.Consequat net
          </p>
          <p className="text-sm mt-2">
            Vestibulum parturient suspendisse parturient a.Parturient in
            parturient scelerisque nibh lectus quam a natoque adipiscing a
            vestibulum hendrerit et pharetra
          </p>
          <p className="text-sm mt-2">
            {" "}
            fames.Consequat netus. Scelerisque adipiscing bibendum sem
            vestibulum et in a a a purus lectus faucibus lobortis tincidunt
            purus lectus nisl class eros.Condimentum a et ullamcorper dictumst
            mus et tristique elementum nam inceptos hac vestibulum amet elit
          </p>
        </div>
      </div>
    </>
  );
}

export default ShippingnDeliveryTab;
