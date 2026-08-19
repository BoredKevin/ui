# Avatar

Displays a user profile image with automatic fallback to text initials or an icon if the image is missing or loading.

- **Source**: `packages/ui/src/components/ui/avatar.tsx`
- **Primitive**: `Avatar (@radix-ui/react-avatar)`

## Avatar Examples

Render user avatars with images or text fallbacks:

```tsx
import { Avatar, AvatarImage, AvatarFallback } from '@boredkevin/ui';

<div className="flex items-center gap-3">
  <Avatar>
    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
    <AvatarFallback>CN</AvatarFallback>
  </Avatar>
  <Avatar>
    <AvatarFallback>BK</AvatarFallback>
  </Avatar>
</div>
```

## Props Reference

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | `undefined` | Additional Tailwind utility classes |
