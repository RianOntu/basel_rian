"use client";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ReviewTabs from "../ReviewTabs/ReviewTabs";
import ShippingnDeliveryTab from "../ShippingnDeliveryTab/ShippingnDeliveryTab";

const TabNavigation = () => {
  return (
    <>
      <Tabs>
        <TabList className="flex justify-center items-center border-b-2 mb-4">
          <Tab>Description</Tab>
          <Tab>Additional Information</Tab>
          <Tab>Reviews</Tab>
          <Tab>Shipping and Delivery</Tab>
        </TabList>
        <div className="w-[80%] mx-auto">
          <TabPanel>
            <div className="flex flex-col lg:flex-row gap-4 items-start">
              <div className="flex flex-col">
                <div>
                  <h3 className="text-md mt-5 font-bold">
                    PARTURIENT ADIPISCING
                  </h3>
                  <p className="text-justify mt-3">
                    Blandit parturient adipiscing faucibus fringilla vestibulum
                    ultrices integer dolor parturient parturient at porta platea
                    inceptos. Habitant dui ut fringilla eleifend tincidunt
                    scelerisque porta a tortor adipiscing ullamcorper etiam
                    imperdiet pulvinar vel facilisis potenti facilisis mi
                    parturient sed per egestas vivamus a auctor eu curae. Id dui
                    bibendum non enim accumsan leo habitant diam eu.
                  </p>
                </div>
                <div>
                  <h3 className="text-md mt-[30px] font-bold">
                    PARTURIENT ADIPISCING
                  </h3>
                  <p className="text-justify mt-3">
                    Blandit parturient adipiscing faucibus fringilla vestibulum
                    ultrices integer dolor parturient parturient at porta platea
                    inceptos. Habitant dui ut fringilla eleifend tincidunt
                    scelerisque porta a tortor adipiscing ullamcorper etiam
                    imperdiet pulvinar vel facilisis potenti facilisis mi
                    parturient sed per egestas vivamus a auctor eu curae. Id dui
                    bibendum non enim accumsan leo habitant diam eu.
                  </p>
                </div>
              </div>
              <img
                src="/single_bag1.jpg"
                className="w-[300px] h-[400px]"
                alt="bag"
              />
              <img
                src="/single_bag2.jpg"
                className="w-[300px] h-[400px]"
                alt="bag"
              />
            </div>
          </TabPanel>
          <TabPanel>
            <div className="flex justify-between items-center">
              <h3>Color :</h3>
              <p className="text-thin">Black,Blue</p>
            </div>
            <hr />
          </TabPanel>
          <TabPanel>
            <ReviewTabs />
          </TabPanel>
          <TabPanel>
            <ShippingnDeliveryTab />
          </TabPanel>
        </div>
      </Tabs>
    </>
  );
};

export default TabNavigation;
