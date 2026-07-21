import { getComments } from '@/helpers/interview-helpers';
import Comment from '../Comment/Comment';
export default async function Comments() {
  const comments = await getComments();

    return comments.map((comment) => (
            <Comment
              key={comment.id}
              comment={comment}
            />
          ))
}