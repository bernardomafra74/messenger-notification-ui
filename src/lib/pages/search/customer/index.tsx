import Router from "next/router";

import SearchForm from "../components/SearchForm";

const Search = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();

    const customerPhone = e.currentTarget.phone?.value || "";
    Router.push(`/search/customer/${customerPhone}`);
  };

  return <SearchForm handleSubmit={handleSubmit} />;
};

export default Search;
