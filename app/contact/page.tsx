import React, { Suspense } from "react";
import PageLoader from "@/components/Reusable/PageLoader";
import TicketCard from "@/components/Reusable/Ticket-card";
import { Form } from "@/components/Contact/Form";

export default function ContactPage() {
  return (
    <Suspense fallback={<PageLoader />}>
      <div className="flex flex-col p-12 w-full mb-12 h-full flex-1 items-center space-y-8">
        {/* Ticket Card 
        <div data-aos="fade-left" className="w-full">
          <TicketCard />
        </div> */}

        {/* Form - Now Appears Below */}
        <div className="w-full">
          <Form />
        </div>
      </div>
    </Suspense>
  );
}
