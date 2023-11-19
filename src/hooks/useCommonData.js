const useCommonData = async (path = '') => {
  const header = []
  const footer = []

  const data = {
    header: { ...header, path },
    footer
  }

  return data
}

export default useCommonData
