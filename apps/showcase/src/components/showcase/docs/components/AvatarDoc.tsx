import React from 'react';
import { DocHeader, DocSection, ComponentPreview, PropsTable } from '../DocLayout';
import { Avatar, AvatarImage, AvatarFallback } from '@boredkevin/ui';

export const AvatarDoc: React.FC = () => {
  return (
    <div className="space-y-10 max-w-4xl mx-auto pb-16">
      <DocHeader
        title="Avatar"
        description="An image element with a fallback for representing the user, with custom sharp or circular geometric styles."
        sourcePath="packages/ui/src/components/ui/avatar.tsx"
        radixPrimitive="@radix-ui/react-avatar"
      />

      <DocSection
        title="Avatar Examples"
        description="Displays image avatar with fallback monogram initials."
      >
        <ComponentPreview
          code={`import { Avatar, AvatarImage, AvatarFallback } from '@boredkevin/ui';

export function AvatarDemo() {
  return (
    <div className="flex items-center gap-4">
      <Avatar>
        <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" alt="Avatar" />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>

      <Avatar>
        <AvatarFallback>BK</AvatarFallback>
      </Avatar>
    </div>
  );
}`}
        >
          <div className="flex items-center gap-4">
            <Avatar>
              <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" alt="Avatar" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>

            <Avatar>
              <AvatarFallback>BK</AvatarFallback>
            </Avatar>
          </div>
        </ComponentPreview>
      </DocSection>
    </div>
  );
};

export default AvatarDoc;
