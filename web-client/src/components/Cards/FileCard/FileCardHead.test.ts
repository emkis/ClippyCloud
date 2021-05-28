import { ref } from 'vue'
import { render } from '@testing-library/vue'

import FileCardHead from './FileCardHead.vue'

function renderFileCardHead({ isExpired = false } = {}) {
  return render(FileCardHead, {
    global: {
      provide: {
        isExpired: ref(isExpired),
        fileExtension: ref('png'),
      },
    },
  })
}

describe('<FileCardHead />', () => {
  it('should render icon and file extension', async () => {
    const { findByTestId, findByText } = renderFileCardHead()

    expect(await findByTestId('icon')).toBeInTheDocument()
    expect(await findByText('png')).toBeInTheDocument()
  })
})
