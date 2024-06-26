import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";

const Pagination = ({ totalData, totalPages, pageNum, pageSize }) => {
  const navigate = useNavigate();
  let [searchParams, setSearchParams] = useSearchParams();
  let items = [];
  const currentPage = parseInt(searchParams.get("page")) || 1;

  for (let number = 1; number <= totalPages; number++) {
    items.push(
      <li key={number}>
        <a
          onClick={() => {
            searchParams.get("continent")
              ? navigate({
                  pathname: "/",
                  search: createSearchParams({
                    continent: searchParams.get("continent"),
                    page: number,
                  }).toString(),
                })
              : navigate({
                  pathname: "/",
                  search: createSearchParams({
                    page: number,
                  }).toString(),
                });
            navigate(0);
          }}
          className={`flex items-center justify-center cursor-pointer px-4 h-10 leading-tight border border-customBlue1 hover:bg-gray-100 hover:text-gray-700 ${
            currentPage === number
              ? "bg-customBlue2 text-white"
              : "text-customBlue1 bg-white"
          }`}
        >
          {number}
        </a>
      </li>
    );
  }

  const handleClickPrevious = () => {
    const prevPage = currentPage > 1 ? currentPage - 1 : 1;

    if (currentPage !== 1) {
      searchParams.get("continent")
        ? navigate({
            pathname: "/",
            search: createSearchParams({
              continent: searchParams.get("continent"),
              page: prevPage,
            }).toString(),
          })
        : navigate({
            pathname: "/",
            search: createSearchParams({
              page: prevPage,
            }).toString(),
          });

      navigate(0);
    }
  };

  const handleClickNext = () => {
    const nextPage = currentPage < totalPages ? currentPage + 1 : totalPages;

    if (totalPages !== currentPage) {
      searchParams.get("continent")
        ? navigate({
            pathname: "/",
            search: createSearchParams({
              continent: searchParams.get("continent"),
              page: nextPage,
            }).toString(),
          })
        : navigate({
            pathname: "/",
            search: createSearchParams({
              page: nextPage,
            }).toString(),
          });

      navigate(0);
    }
  };

  return (
    <>
      <nav aria-label="Page navigation example">
        <ul className="flex flex-wrap justify-center  -space-x-px text-base h-10">
          <li>
            <a
              onClick={handleClickPrevious}
              className="flex items-center justify-center cursor-pointer px-4 h-10 ms-0 leading-tight bg-customBlue1 text-white  border border-e-0 border-customBlue1 rounded-s-md hover:bg-gray-100 hover:text-gray-700"
            >
              Previous
            </a>
          </li>

          {items}

          <li>
            <a
              onClick={handleClickNext}
              className="flex items-center justify-center cursor-pointer px-4 h-10 leading-tight text-white bg-customBlue1 border border-customBlue1 rounded-e-md hover:bg-gray-100 hover:text-gray-700"
            >
              Next
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Pagination;
