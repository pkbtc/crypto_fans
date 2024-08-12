import React from 'react'
import { testDb } from '@/app/(home)/actions/testPost'
const TestPost = () => {
  return (
    <div>
      <div>
        <form action={testDb}>
            <input
                type='text'
                name='title'
                placeholder='enter the title of the post'
            />
            <input
            type='text'
            name='description'
            placeholder='enter the des'

            />
            <button>Test Post</button>
        </form>
      </div>
    </div>
  )
}

export default TestPost
