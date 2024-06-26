const BASE_URL = "https://plucky-agent-424606-s3.et.r.appspot.com";

export async function bookingFlight(data, token) {
  const response = await fetch(`${BASE_URL}/api/v1/booking`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: data,
  });

  const resData = await response.json();

  if (!response.ok) {
    throw new Error(resData.message);
  }

  return resData;
}
