async function update_path(foldername, data) {
  if (!data || data.length === 0) {
    return null;
  }
  var updated_data;
  updated_data = "https://travel-ai-harsh.onrender.com/images/" + foldername + "/" + data;
  // console.log(updated_data);
  return updated_data;
}

module.exports = update_path;
