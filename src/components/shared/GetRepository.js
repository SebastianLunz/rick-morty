function getRepository(repositoryUrl) {
  let suffixUrl = "";
  if (!repositoryUrl.includes('?')) {
    return suffixUrl;
  } else {
    const startSubStr = repositoryUrl.indexOf('?');
    const endSubStr = repositoryUrl.length;
    suffixUrl = repositoryUrl.substring(startSubStr, endSubStr);
    return suffixUrl;
  }
};

export default getRepository;