import React from 'react';
import {Pagination, PaginationItem} from '@material-ui/lab';
import {Link} from "react-router-dom";


function PaginationLink({numberOfPages, repository}) {
  return (
    <Pagination
      shape="rounded"
      count={numberOfPages}
      renderItem={(item) => (
        <PaginationItem
          component={Link}
          to={`${repository}${item.page === 1 ? '' : `?page=${item.page}`}`}
          {...item}
        />
      )}
    />
  );
}

export default PaginationLink;