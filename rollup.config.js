import babel from 'rollup-plugin-babel'
import { uglify } from 'rollup-plugin-uglify'

const config = {
  input: 'src/index.js',
  external: ['react'],
  output: {
    format: 'umd',
    name: 'ReactIsCapsLockActive',
    globals: {
      react: 'React'
    }
  },
  plugins: [
    babel({
      exclude: "node_modules/**"
    }),
    uglify()
  ],
}

export default config
