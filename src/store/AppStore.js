const readCourses = async (page, rowsPerPage) => {
  const response = await fetch(
    `/api/course?page=${page}&rowsPerPage=${rowsPerPage}`
  );
  const body = await response.json();
  if (response.status !== 200) throw Error(body.message);
  return body;
};

const saveCourses = async payload => {
  const response = await fetch(`/api/course/save`, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });
  const body = await response.json();
  if (response.status !== 200) throw Error(body.message);
  return body;
};

const removeCourses = async payload => {
  const response = await fetch(`/api/course/delete`, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ids: payload })
  });
  const body = await response.json();
  if (response.status !== 200) throw Error(body.message);
  return body;
};

export { readCourses, saveCourses, removeCourses };
