import React from 'react'

function Pagination() {
  return (
    <div>
      <nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item"><a class="page-link text-dark" href="/">Previous</a></li>
    <li class="page-item"><a class="page-link text-danger " href="/">1</a></li>
    <li class="page-item"><a class="page-link text-danger" href="/">2</a></li>
    <li class="page-item"><a class="page-link text-danger" href="/">3</a></li>
    <li class="page-item"><a class="page-link text-dark" href="/">Next</a></li>
  </ul>
</nav>
    </div>
  )
}

export default Pagination