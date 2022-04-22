// import axios from "axios";
import type { GetServerSidePropsContext } from "next";

import type { SearchCustomerProps } from "lib/pages/search/customer/[phone]";
import CustomerSearch from "lib/pages/search/customer/[phone]";

export const getServerSideProps = async ({
  query,
}: GetServerSidePropsContext) => {
  const phone = query.phone as string;
  // const customer = await axios.get(`/api/customer/${phone}`);

  const customerDataMock = {
    id: null,
    phone,
    email: "bernardo.mafra@queimadiaria.com.br",
    name: "Bernardo Mafra",
    optIn: true,
    valid: true,
    alternativeId: phone,
    messages: [
      {
        id: "283bfcb9-af6e-4753-8f14-cf3b80c4cee0",
        status: "sent",
        variableValues: {
          url: "https://play.queimadiaria.com",
          name: "Bernardo Mafra",
          email: "bernardo.mafra@queimadiaria.com",
        },
        phone,
        templateId: 1,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
    ],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  const props: SearchCustomerProps = {
    customer: customerDataMock,
    title: "Messages by customer",
  };

  return { props };
};

export default CustomerSearch;
