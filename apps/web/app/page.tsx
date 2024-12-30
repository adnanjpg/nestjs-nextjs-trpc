import Clientside from './Clientside';
import { trpc } from './trpc';

export default async function Home() {
    const response = await trpc.hellocats.query({});
    return (
        <div>
            <p>Server side - {response}</p>
            <Clientside />
        </div>
    );
}
